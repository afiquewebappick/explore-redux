export const getIssues = async () => {
  const response = await fetch('/issues.json');
  return response.json();
};
