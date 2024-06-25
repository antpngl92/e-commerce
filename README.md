<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://digitalis.io/wp-content/uploads/2020/12/PostgreSQL600x340.jpg" alt="postgesql" width="50" height="28"/>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />    
    <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_6651d24963be0c8f8bf74852b725dc5f/kinde.jpg" alt="kinde auth" height="28"/>
  </div>

  <h3 align="center">CaseCobra - A Modern Fullstack E-Commerce Shop for Custom Phone Cases</h3>
</div>

## Features

- 🛠️ Complete shop built from scratch in Next.js 14
- 💻 Beautiful landing page included
- 💳 Secret admin dashboard to manage orders
- 🖥️ Drag-and-drop file uploads
- 🛍️ Customers can purchase directly from you
- 🌟 Clean, modern UI on top of shadcn-ui
- 🛒 Completely custom phone case configurator
- 🔑 Authentication using Kinde
- ✉️ Beautiful thank-you email after purchase
- ✅ Apple-inspired configuration design
- ⌨️ 100% written in TypeScript
- 🎁 ...much more

## Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
  git clone https://github.com/antpngl92/e-commerce
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Retrieved from our auth provider Kinde
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=https://<your-kinde-app>.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/

NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Retrieved from our payment provider stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Retrieved from file uploading service uploadthing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Retrieved from our hosted database at neon.tech
DATABASE_URL=

# (optional) Your email to access the secret admin dashboard
ADMIN_EMAIL=

# (optional) Retrieved from email sending service resend
RESEND_API_KEY=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## License

[MIT](https://choosealicense.com/licenses/mit/)
