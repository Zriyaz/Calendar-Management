import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import Logo from "@/public/logo.png"
import { signIn } from '@/app/lib/auth'
import { GithubAuthButton, GoogleAuthButton } from './SubmitButton'

const AuthModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for free</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[360px]'>
                <DialogHeader className='flex flex-row justify-center items-center gap-2'>
                    <Image src={Logo} alt='"auto' className="size-10" />
                    <h4 className='text-3xl font-semibold'>Cal<span className='text-blue-500'>Riyaz</span></h4>
                </DialogHeader>
                <div className='flex flex-col mt-8 gap-4'>
                    <form action={async () => {
                        "use server"
                        await signIn("google")
                    }} className='w-full'>
                        <GoogleAuthButton />
                    </form>
                    <form action={async () => {
                        "use server"
                        await signIn("github")
                    }} className='w-full'>
                        <GithubAuthButton />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModal