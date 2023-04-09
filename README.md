My first real project using an API to pull through data. Created using API Ninja Planets API

CSS is showing as main language due to animated star background created by Riley Pearce (https://codepen.io/riley-pearce/pen/OJWPjZM)

Below are a few issues that I ran into, but eventually managed to solve:

1.) Using the range slider input to determine the distance. It was initally only coming back with the max distance set as one. This was due to it not detecting the distance changes correctly.
I'm sure there is a much better way to do this than I have done, but my method does the job as intended.

2.) Originally able to click 'Next' past the amount of planets in the current search result. Realised I could create an array length variable within the GET request, and was able to implement this.

