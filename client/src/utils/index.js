export function formatFirstUpperCase(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}

export function formatProviderToOptions(providers) {
  return providers.map(provider => {
    return {value: provider.id, title: provider.organization}
  })
}