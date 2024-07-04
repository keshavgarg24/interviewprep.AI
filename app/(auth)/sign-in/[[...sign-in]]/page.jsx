'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';


export default function Page() {
  return (

<section class="bg-white">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
  <section class="relative flex h-32 items-end bg-blue-900 lg:col-span-5 lg:h-full xl:col-span-6">
  <div class="hidden lg:relative lg:block lg:p-12 bg-blue-900 bg-opacity-80">
    <a class="block text-white" href="#">
      <span class="sr-only">Home</span>
    </a>

    <h2 class="mt-6 text-3xl font-bold text-white sm:text-3xl md:text-4xl">
      Discover AI Interviews with <strong>interviewprep.AI</strong> 🤖
    </h2>

    <p class="mt-4 leading-relaxed text-white/90">
      Explore how AI is transforming interviews and helping people in their careers. 
    </p>
  </div>
</section>




    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <div class="relative -mt-16 block lg:hidden">
          <a
            class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span class="sr-only">Home</span>
            <svg
              class="h-8 sm:h-10"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to interviewprep AI
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
          </p>
        </div>

        <div className="grid w-full flex-grow items-center bg-blue px-4 sm:justify-center">
      <SignIn.Root>
        <SignIn.Step name="start" className="w-full space-y-6 rounded-2xl px-4 py-10 sm:w-96 sm:px-8">
          <header className="text-center">

            <h1 className="mt-4 text-xl font-medium tracking-tight text-neutral-950">Sign in to get started</h1>
          </header>
<div className='flex justify-center items-center'>
<svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#3064E8', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="150" rx="10" fill="url(#grad1)" />
  <text x="100" y="30" text-anchor="middle" fill="white" font-family="modesto" font-size="18" font-weight="bold">interviewprep</text>
  <rect x="30" y="40" width="140" height="80" rx="10" fill="#1E40AF" />
  <rect x="35" y="45" width="130" height="60" rx="8" fill="#3064E8" />
  <rect x="50" y="125" width="100" height="10" rx="2" fill="#4B5563" />
  <text x="130" y="90" text-anchor="middle" fill="white" font-family="Arial" font-size="48" font-weight="bold">.AI</text>
</svg>
</div>

          <Clerk.GlobalError className="block text-sm text-red-600" />
          <Clerk.Field name="identifier">
            <Clerk.Label className="sr-only">Email</Clerk.Label>
            <Clerk.Input
              type="email"
              required
              placeholder="Email"
              className="w-full border-b border-blue-200 bg-blue pb-2 text-sm/6 text-neutral-950 outline-none placeholder:text-blue-400 hover:border-blue-300 focus:border-blue-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
            />
            <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="relative w-full rounded-md bg-blue-600 bg-gradient-to-b from-blue-500 to-blue-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0"
          >
            Sign In
          </SignIn.Action>
          <div className="rounded-xl bg-neutral-100 p-5">
            <p className="mb-4 text-center text-sm/5 text-blue-500">Alternatively, sign in with these platforms</p>
            <div className="space-y-2">
              <Clerk.Connection
                name="google"
                className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-blue-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-blue-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden className="size-4">
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Login with Google
              </Clerk.Connection>
              <Clerk.Connection
                name="github"
                className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden className="size-4">
                  <path
                    fill="currentColor"
                    d="M8 .198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.532 5.47 7.591.4.073.546-.173.546-.385 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.056 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.072-.517.28-.871.507-1.072-1.776-.201-3.644-.888-3.644-3.954 0-.873.31-1.587.824-2.147-.082-.202-.357-1.015.078-2.114 0 0 .67-.215 2.195.82A7.66 7.66 0 0 1 8 4.803a7.66 7.66 0 0 1 2.005.27c1.526-1.034 2.195-.82 2.195-.82.436 1.099.16 1.912.078 2.114.514.56.824 1.274.824 2.147 0 3.073-1.87 3.75-3.652 3.946.287.247.543.735.543 1.482 0 1.07-.01 1.933-.01 2.195 0 .214.146.462.55.384A8.002 8.002 0 0 0 16 8.198c0-4.418-3.582-8-8-8z"
                  />
                </svg>
                Login with GitHub
              </Clerk.Connection>
            </div>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </div>
      </div>
    </main>
  </div>
</section>
  );
}