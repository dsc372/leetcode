const findMinArrowShots = function (points) {
    points.sort((a, b) => a[0]-b[0])
    let sum = 1
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] <= points[i-1][1]) {
          points[i][1]=Math.min(points[i][1],points[i-1][1])
      }
      else {
          sum++
      }
    }
    return sum
  }