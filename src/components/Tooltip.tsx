import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

const Trigger = TooltipPrimitive.Trigger;

const Content = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
		{...props}
	/>
));
Content.displayName = TooltipPrimitive.Content.displayName;

const TooltipWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<TooltipPrimitive.Provider delayDuration={100}>
			<TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
};
const Tooltip = {
	Trigger,
	Content,
	Wrapper: TooltipWrapper,
};

export default Tooltip;
