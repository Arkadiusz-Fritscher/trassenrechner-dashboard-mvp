export const useHeaders = () => {
  const user = useUser();
  const company = useCompany();

  if (!user.value?.headers && !company.value?.headers) {
    return null;
  }

  const userHeaders = user.value?.headers;
  if (userHeaders) {
    return userHeaders;
  }

  const companyHeaders = company.value?.headers;

  if (companyHeaders) {
    return companyHeaders;
  }

  return null;
};
