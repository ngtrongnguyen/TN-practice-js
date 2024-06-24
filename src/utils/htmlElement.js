export const createContainer = (className, ...children) => {
  const container = document.createElement('div');
  container.className = className;
  container.append(...children);
  return container;
};
