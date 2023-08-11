// useMetaTags.ts

export function setMetaTags(title: string, description: string, imageUrl: string): void {
  document.title = title
  const tags = [
    {property: 'og:title', content: title},
    {property: 'og:description', content: description},
    {property: 'og:image', content: imageUrl}
  ]

  tags.forEach(tag => {
    let element = document.querySelector(`meta[property='${tag.property}']`)
    if (element) {
      element.setAttribute('content', tag.content)
    } else {
      element = document.createElement('meta')
      element.setAttribute('property', tag.property)
      element.setAttribute('content', tag.content)
      document.getElementsByTagName('head')[0].appendChild(element)
    }
  })

}
