# Postier

Postier is a simple project for fun for building email

# Introduction

Inspired by [react-email](https://github.com/resendlabs/react-email), Postier is a cloned based on `vite` instead of `next` with a closer api for looking like `storybook`

# Why

- Don't want use NextJS in my project
- Don't want dirt my `api` folder with a `.react-emails` folder
- Don't want install `babel-typescript` for transform a basic react component to HTML

I mostly use `vite` and `nestjs` for building my app so i want something i can cleaning installing them

# Install

Install `@react-email` component and `postier` from your command line

#### With pnpm

```sh
pnpm install @react-email/button postier
```

# Getting started

Create `src/emails/MyEmail.email.tsx`

```
export type WelcomeEmailProps = {
    email: string
}

export const WelcomeEMail = ({ email }: WelcomeEmailProps) => {
    return <div style={{ color: "#61dafb" }}>My first Email {email}</div>
}
```

# Components

We don't provide any components right now just use some provide by `react-email`

# Integrations

You can just import the component and use `@postier/render` like following

```
import { render } from '@postier/render'
const { html } = await render(WelcomeEmail, { email: 'example@example.com' });
```

# Development

Just add an command in your `package.json`:

```json
{
  "emails:dev": "postier dev"
  "emails:build":
}
```
