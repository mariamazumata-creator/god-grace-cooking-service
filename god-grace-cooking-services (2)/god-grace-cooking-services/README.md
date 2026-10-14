# God Grace Cooking Services Website

A static, responsive website: portfolio, services, booking/contract request form, FAQ and contact details.
Built with plain HTML, CSS and JavaScript. No database or server is needed, and no secret keys are used.

## Folder structure
```
index.html          the whole page
css/style.css       styles and colours (edit the :root variables)
js/main.js          menu, form validation, WhatsApp/email sending
assets/images/      logo.png and your photos
package.json        optional, for the local server command
```

## Run locally
1. Extract the ZIP.
2. Easiest: double-click `index.html`.
3. Or with Node.js installed (https://nodejs.org), open a terminal in the folder and run `npm start`, then visit http://localhost:3000.

## Things to set up
- **Booking form:** it opens a pre-filled WhatsApp message to 0806 003 2502. To enable "Send by email", put your business email in `EMAIL_ADDRESS` at the top of `js/main.js`. Requests are not stored anywhere; they arrive in your WhatsApp or inbox.
- **Photos:** add your images to `assets/images/` (for example `wedding.jpg`). In `css/style.css` add, for each tile, a rule such as `.g1{background-image:url(../assets/images/wedding.jpg)}`.
- **Services and FAQ:** these are sample texts written from the business name. Edit them in `index.html` so they match what you really offer.
- **Fonts:** Google Fonts load online; the site falls back to Georgia/system fonts offline.

## Deploy online (free options)
- **Netlify:** drag the extracted folder onto https://app.netlify.com/drop
- **Vercel / GitHub Pages / Cloudflare Pages:** upload the folder; no build step, publish directory is the project root.
- Then point your own domain at it in the host's settings.

## Possible upgrades
Form storage in a database, online payments, or an admin panel would need a backend (for example Formspree, Supabase or Node). They are not included.

## Food images
The dish pictures in `assets/images/*.svg` are illustrations drawn for this site. To use real photos, save them in `assets/images/` and change the file names in the menu cards in `index.html` and in the `.g1` to `.g5` rules at the bottom of `css/style.css`.
