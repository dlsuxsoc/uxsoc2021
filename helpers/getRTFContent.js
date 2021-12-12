const getRTFContent = (item, start = 0, end = -1) => {
  return item.content.json.content[0].content[0].value.slice(start, end);
};

export default getRTFContent;
