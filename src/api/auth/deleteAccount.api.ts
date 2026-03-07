export const deleteAccount = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        isSuccess: true,
        message: '계정이 삭제되었습니다.',
      });
    }, 1000);
  });
};
