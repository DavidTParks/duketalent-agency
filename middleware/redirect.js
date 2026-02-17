// This project is deprecated — redirect all traffic to the new site.
export default function () {
  if (process.client) {
    window.location.replace('https://www.duketalent.io/')
  }
}
