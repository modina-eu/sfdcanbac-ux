// to do:
// automatically convert links to links
// https://docs.google.com/spreadsheets/d/e/2PACX-1vTfz0q6_b45MXaiHO0CXOXu3i_mfTeC0r5ISlB8VR0gShJ57tNhks6KllNM95BqWoE5dStNm37lKfNc/pubhtml
// https://docs.google.com/spreadsheets/d/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/edit?usp=sharing

// json api:
// https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json

fetch('https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json')
  .then(response => response.json())
  .then(data => console.log(data.feed.entry));t

const slides = []
const columns = []
const processEntries = (entries) => entries.forEach((entry) => {
  const cell = entry['gs$cell']
})

let links = [
  { url: "https://hydra.ojack.xyz/?code=JTJGJTJGJTIwJTIyZWdnJTIwb2YlMjB0aGUlMjBwaG9lbml4JTIyJTBBJTJGJTJGJTIwQWxleGFuZHJlJTIwUmFuZ2VsJTBBJTJGJTJGJTIwd3d3LmFsZXhhbmRyZXJhbmdlbC5hcnQuYnIlMkZoeWRyYS5odG1sJTBBJTBBc3BlZWQlM0QxLjIlMEFzaGFwZSg5OSUyQy4xNSUyQy41KS5jb2xvcigwJTJDMSUyQzIpJTBBJTBBLmRpZmYoJTIwc2hhcGUoMjQwJTJDLjUlMkMwKS5zY3JvbGxYKC4wNSkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjEwJTIwKS5jb2xvcigxJTJDMCUyQy43NSklMjApJTBBLmRpZmYoJTIwc2hhcGUoOTklMkMuNCUyQy4wMDIpLnNjcm9sbFgoLjEwKS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGMjAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEEuZGlmZiglMjBzaGFwZSg5OSUyQy4zJTJDLjAwMikuc2Nyb2xsWCguMTUpLnJvdGF0ZSglMjAoKSUzRCUzRXRpbWUlMkYzMCUyMCkuY29sb3IoMSUyQzAlMkMuNzUpJTIwKSUwQS5kaWZmKCUyMHNoYXBlKDk5JTJDLjIlMkMuMDAyKS5zY3JvbGxYKC4yMCkucm90YXRlKCUyMCgpJTNEJTNFdGltZSUyRjQwJTIwKS5jb2xvcigxJTJDMCUyQy43NSklMjApJTBBLmRpZmYoJTIwc2hhcGUoOTklMkMuMSUyQy4wMDIpLnNjcm9sbFgoLjI1KS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGNTAlMjApLmNvbG9yKDElMkMwJTJDLjc1KSUyMCklMEElMEEubW9kdWxhdGVTY2FsZSglMEElMjAlMjBzaGFwZSgyNDAlMkMuNSUyQzApLnNjcm9sbFgoLjA1KS5yb3RhdGUoJTIwKCklM0QlM0V0aW1lJTJGMTAlMjApJTBBJTIwJTIwJTJDJTIwKCklM0QlM0UoTWF0aC5zaW4odGltZSUyRjMpKi4yKSUyQi4yJTIwKSUwQSUwQS5zY2FsZSgxLjYlMkMuNiUyQzEpJTBBLm91dCgp",
    text: "hi my name is olivia and this is a test"
  }, {
    url: "https://i.giphy.com/media/l41m6YZzaqxZQp4IM/giphy.mp4",
    text: "does media work?"
  }, {
    url: "https://hydra.ojack.xyz/?code=JTJGJTJGcmFuZG9tJTIwdHJ5cG9waG9iaWElMjAtJTIwY2hhbmdlcyUyMGV2ZXJ5dGltZSUyMHlvdSUyMGxvYWQlMjBpdCElMEElMkYlMkZieSUyMFJpdGNoc2UlMEElMkYlMkZpbnN0YWdyYW0uY29tJTJGcml0Y2hzZSUwQSUyMCUwQWZ1bmN0aW9uJTIwcihtaW4lM0QwJTJDbWF4JTNEMSklMjAlN0IlMjByZXR1cm4lMjBNYXRoLnJhbmRvbSgpKihtYXgtbWluKSUyQm1pbiUzQiUyMCU3RCUwQSUyMCUwQXNvbGlkKDElMkMxJTJDMSklMEElMjAlMjAlMDkuZGlmZihzaGFwZSglNUI0JTJDNCUyQzQlMkMyNCU1RC5zbW9vdGgoKS5mYXN0KC41KSUyQ3IoMC42JTJDMC45MyklMkMuMDkpLnJlcGVhdCgyMCUyQzEwKSklMEElMDkubW9kdWxhdGVTY2FsZShvc2MoOCkucm90YXRlKHIoLS41JTJDLjUpKSUyQy41MiklMEElMDkuYWRkKCUwQSUyMCUyMCUwOSUwOXNyYyhvMCkuc2NhbGUoMC45NjUpLnJvdGF0ZSguMDEyKihNYXRoLnJvdW5kKHIoLTIlMkMxKSkpKSUwQSUyMCUyMCUwOSUwOS5jb2xvcihyKCklMkNyKCklMkNyKCkpJTBBJTIwJTIwJTIwJTIwJTA5Lm1vZHVsYXRlUm90YXRlKG8wJTJDcigwJTJDMC41KSklMEElMjAlMjAlMDklMDkuYnJpZ2h0bmVzcyguMTUpJTBBJTIwJTIwJTA5JTA5JTJDLjcpJTBBJTA5Lm91dCgp",
    text: "more hydra"
  }
]

let slideIndex = 0
const iframe = document.createElement("iframe")
iframe.width = 800
iframe.height = 600

const info = document.createElement("div")
const slideNumber = document.createElement("div")

// info.innerHTML = `A sentence about me with a link https://ojack.xyz`

const showSlide = () => {
   iframe.src = links[slideIndex].url
   info.innerText = links[slideIndex].text
  slideNumber.innerHTML = `${slideIndex+1}/${links.length}`
}

const showNext = () => {
  slideIndex++
  if (slideIndex >= links.length) slideIndex = 0
  showSlide()
}

const showPrevious = () => {
   slideIndex--
  if (slideIndex < 0) slideIndex = links.length - 1
  showSlide()
}

showSlide()


document.body.appendChild(iframe)
document.body.appendChild(info)

const previousButton = document.createElement("button")
previousButton.innerHTML = '<'
document.body.appendChild(previousButton)
previousButton.onclick = showPrevious

const nextButton = document.createElement("button")
nextButton.innerHTML = '>'
document.body.appendChild(nextButton)
nextButton.onclick = showNext


document.body.appendChild(slideNumber)