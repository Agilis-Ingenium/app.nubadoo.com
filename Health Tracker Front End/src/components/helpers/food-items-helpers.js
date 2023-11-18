export function foodImage(slug) {

  slug = slug.replace(/ /g, '-').toLowerCase();

    var imageString = "./images/food-items/" + slug + ".jpg"

    return imageString
}