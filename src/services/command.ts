export const formatDoc = (cmd: string, value: string | null = null) => {
  if (value) {
    document.execCommand(cmd, false, value);
  } else {
    document.execCommand(cmd);
  }
};
