import { patchUsername } from '@/api/member/patchUsername';
import { QUERY_KEYS } from '@/constants/api';
import { useHandleReactQueryError } from '@/hooks/useHandleError';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchUsername = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: { username: string } }) =>
      patchUsername({ data }),
    onSuccess: (_response) => {
      // Note: response doesn't contain id, but we still need to invalidate queries
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE], // Invalidate all user profile queries since we don't have specific id
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SELLER_MY_PROFILE],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SELLER_MY_MARKET],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SELLER_MY_MARKET],
      });
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === QUERY_KEYS.ID_DUPLICATE_CHECK,
      });
      onSuccessCallback?.();
    },
    onError: useHandleReactQueryError,
  });
};
