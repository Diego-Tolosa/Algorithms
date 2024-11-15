function countApplesAndOranges (s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach(apple => {
    let applePos = a + apple;
    if (applePos >= s && applePos <= t) {
      appleCount++;
    }
  });

  oranges.forEach(orange => {
    let orangePos = b + orange;
    if (orangePos >= s && orangePos <= t) {
      orangeCount++;
    }
  });

  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // 1, 1