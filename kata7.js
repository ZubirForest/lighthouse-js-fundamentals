const checkAir = (samples, threshold) => {

  let dirtySum = 0;

  for (let i = 0; i < samples.length; i++) {

    if (samples[i] === 'dirty') {
      dirtySum++;
    };
  };

  if ((dirtySum/samples.length) > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  };

};