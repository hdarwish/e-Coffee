export const success = (res, status) => (entity) => {
  if (entity) {
    let newResponseObject = {
      success: true,
      error: false,
      data: entity
    }
    res.status(status || 200).json(newResponseObject)
  }
  return null;
}

export const failure = (res, status) => (error) => {
  if (error) {
    return res.status(status).json({
      error: true,
      message: error.message
    })
  }
  return null;

}