To reproduce:

1. Run the app
2. Using the links on the screen, notice that all routes work (`/`, `/stack1`, and `/stack2`)
3. Go back to `/`
4. Open the drawer
5. Moving between `/` and `/stack2` in either direction does not work. Neither `router.push` nor the `<Link/>` elements have any effect. There are no error logs.
6. Moving between `/stack1` and any other link _does_ work.

Reproduced this behavior on both web and iOS.
