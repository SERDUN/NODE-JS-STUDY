const ideas = []

export function createIdea(title, description) {
  const idea = {
    id: ideas.length,
    title,
    description
  };
  ideas.push(idea)
  return idea;
}

export function replaceIdea(id,title, description) {
  const idea = {
    id: id,
    title,
    description
  };
  const index = ideas.findIndex(item => item.id === Number(id));
  ideas[index]=idea
  return idea;
}

export function deleteIdea(id) {
  const index = ideas.findIndex(item => item.id === Number(id));
  console.log(`Remove by index: ${index} by id:${id}`)
  if (index !== -1) ideas.splice(index, 1);
}

export function getIdea(id) {
  const index = ideas.findIndex(item => item.id === Number(id));
  return ideas[index]
}

export function getIdeas() {
  return ideas;
}

export function updateIdea(id, title, description) {
  const index = ideas.findIndex(item => item.id === Number(id));
  if (index !== -1) {
    ideas[index].title = title;
    ideas[index].description = description;
  }
}
