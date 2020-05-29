export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "homepage") {
    return "/";
  }

  if (doc.type === "page") {
    return "/page/" + doc.uid;
  }

  return "/not-found";
}
