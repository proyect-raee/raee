import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { queryKeys } from '@/modules/talents/shared/constants';
import { IInvitation } from './use-get-invitation.interfaces';
import { Http } from '@/config/http';

const { INVITATIONS } = queryKeys;
const endpoint = 'talents';

export const useInvalidateInvitations = () => {
  const queryClient = useQueryClient();
  const refreshInvitations = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: [INVITATIONS] });
  }, [queryClient]);

  return refreshInvitations;
};

export const useGetInvitations = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  console.log(token);

  return useQuery<IInvitation>({
    queryKey: [INVITATIONS],
    queryFn: () =>
      Http.get(`${endpoint}/invitations`, { params: { token } }).then(
        ({ data }: { data: IInvitation }) => data,
      ),
  });
};
