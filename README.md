To reproduce:

1. Run the app
2. Using the links on the screen, notice that all routes work (`/`, `/groups`, and `/boards`)
3. Go back to `/`
4. Open the drawer
5. Two links here don't work: moving from `/` to `/groups` and vice versa. Neither router.push nor the `<Link/>` elements.
6. Moving between `/boards` and any link _does_ work.

Reproduced this behavior on both web and iOS.
