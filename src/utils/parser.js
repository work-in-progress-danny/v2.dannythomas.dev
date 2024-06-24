import * as fs from 'node:fs'

const newLine = '\n'

const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g
const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, 'g')
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, 'g')
const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, 'g')
const REGEXP_BR = new RegExp(`((${newLine}){2,})`, 'g')
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g
const REGEXP_H3 = /^### (.*$)/gim
const REGEXP_H2 = /^## (.*$)/gim
const REGEXP_H1 = /^# (.*$)/gim
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g
const REGEXP_CODE = /`(.*?)`/g
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g
const REGEXP_DEL = /\~\~(.*?)\~\~/g
const REGEXP_Q = /\:\"(.*?)\"\:/g
const REGEXP_META_MARKER = /@@/

const markdownParser = (text, lastEdited, createdAt) => {
  const toHTML = text
    .replace(REGEXP_H1, '') // remove title because the buttons define the title
    .replace(REGEXP_H2, '<h2 class="text-lg">$1</h2>')
    .replace(REGEXP_H3, '<h3 class="">$1</h3>')

    .replace(REGEXP_PARAGRAPH, '<p>$1</p>')

    .replace(REGEXP_CODE, '<code>$1</code>')
    .replace(REGEXP_STRONG, '<strong>$1</strong>')

    .replace(REGEXP_IMAGE, '<img alt="$1" src="$2"/>')
    .replace(
      REGEXP_LINK,
      '<a target="_blank" class="text-blue-300 hover:underline" href="$2">$1</a>'
    )
    .replace(
      REGEXP_META_MARKER,
      `<p class="text-sm">Last edited: <span class="text-orange-500">${lastEdited}</span></p> <p class="text-sm">Created at: <span class="text-green-500">${createdAt}</span></p>`
    )

  return toHTML.trim() // using trim method to remove any white space
}

const args = process.argv.slice(2)

const parseFile = path => {
  const data = fs.readFileSync(path, 'utf8')
  const stats = fs.statSync(path, 'utf8')
  return {
    title: data.match(REGEXP_H1, '$1')[0].replace('# ', ''),
    content: markdownParser(
      data,
      stats.mtime.toDateString(),
      stats.birthtime.toDateString()
    ),
  }
}

const parseSectionTitle = path => path.match(/\.\/src\/content\/(.*)\/.*/)[1]

const parseFiles = paths =>
  paths.forEach(path => {
    const title = parseSectionTitle(path)
    if (path.match('_')) {
      return
    }
    const content = parseFile(path)
    const sectionIndex = sections.findIndex(section => section.title === title)

    if (sectionIndex !== -1) {
      sections[sectionIndex].content.push(content)
    } else {
      sections.push({ title, content: [content] })
    }
  })

const sections = []

parseFiles(args)

sections.forEach(({ title, content }) => {
  const path = `./src/content/${title}/_output.ts`
  fs.writeFileSync(
    path,
    `export type Work = { title: string, content:string}; export const ${title}:Work[] =`
  )
  fs.appendFileSync(path, JSON.stringify(content))
})

/* console.log(parseFiles(args)) */
