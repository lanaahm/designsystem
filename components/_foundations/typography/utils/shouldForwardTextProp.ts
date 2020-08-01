const shouldForwardTextProp = prop => {
  return !['scale'].includes(prop);
};

export default shouldForwardTextProp;
