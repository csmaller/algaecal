export default function ({ store, redirect, route }) {

  if (!store.state.user.user.loggedIn) {
    return redirect(`/login?redirect=${route.path}`);
  }

  if (store.state.user.user.loggedIn && route.path === '/') {
    return redirect('/videos');
  }
  return null;
}
