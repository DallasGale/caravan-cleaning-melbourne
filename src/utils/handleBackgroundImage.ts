const handleBackgroundImage = (
  isMobile,
  backgroundImage,
  mobileBackgroundImage,
) => {
  if (backgroundImage) return `url(${backgroundImage.asset.url})`
  else if (isMobile && mobileBackgroundImage)
    return `url(${mobileBackgroundImage.asset.url})`
  else return 'none'
}

export default handleBackgroundImage
