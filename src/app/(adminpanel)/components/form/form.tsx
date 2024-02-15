"use client"
import { FC } from "react";

export default function Form({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <form>
                {children}
            </form>
        </>
    );
}