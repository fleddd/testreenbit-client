import { checkAuth } from '@/entities/user/api'
import { UserDto } from '@/entities/user/model/types'
import { useQuery } from '@tanstack/react-query'

const useCheckUserAuth = () => {
	return useQuery<UserDto>({
		queryKey: ['auth'],
		queryFn: checkAuth,
		meta: {
			errorMessage: 'Unauthorized. No authorization provided.',
		},
		staleTime: 60 * 1000,
		refetchInterval: 2 * 60 * 1000,
	})
}

export default useCheckUserAuth
