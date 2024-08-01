const handleBackgroundImage = (
  isTablet,
  backgroundImage,
  mobileBackgroundImage,
) => {
  if (!isTablet && backgroundImage) return `url(${backgroundImage.asset.url})`
  else if (isTablet && mobileBackgroundImage)
    return `url(${mobileBackgroundImage.asset.url})`
  else return 'none'
}

export default handleBackgroundImage
