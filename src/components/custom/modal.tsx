import { ReactNode } from "react"

import { useModal } from "@/hooks/use-modal"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../ui/dialog"

type Props = {
    modalKey?: string
    title?: ReactNode
    description?: ReactNode
    children?: ReactNode
    className?: string
    size?: string
    onClose?: () => void
}

// Modal component that uses the context to control visibility
const Modal = ({
    title,
    description,
    children,
    modalKey = "default",
    className = "",
    onClose,
}: Props) => {
    const { isOpen, closeModal } = useModal(modalKey)

    const handleClose = () => {
        if (onClose) {
            onClose()
        }
        closeModal()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            {isOpen && (
                <DialogContent
                    className={className}
                    aria-describedby=""
                >
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {!title && (
                        <VisuallyHidden>
                            <DialogTitle>title</DialogTitle>
                        </VisuallyHidden>
                    )}
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                    {children}
                </DialogContent>
            )}
        </Dialog>
    )
}

export default Modal
