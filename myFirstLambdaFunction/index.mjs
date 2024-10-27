export const handler = async (event, context) => {
  const length = event.length;
  const width = event.width;
  const height = event.height;
  let volume = calculateVolume(length, width, height);
  console.log(`The volume is ${volume}`);

  console.log("CloudWatch log group: ", context.logGroupName);

  let data = {
    volume: volume,
  };
  return JSON.stringify(data);

  function calculateVolume(length, width, height) {
    return length * width * height;
  }
};
