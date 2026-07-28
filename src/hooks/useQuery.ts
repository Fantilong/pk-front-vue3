export function useQuery<T>() {
  const route = useRoute()
  return computed(() => route.query as T)
}
