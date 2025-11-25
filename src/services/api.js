export async function fetchGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This message came from the mock service layer.')
    }, 400)
  })
}
