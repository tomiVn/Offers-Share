import { useAuthFn } from "../config/use.auth";

export function collectionAuthFn() {

    const useAuth = useAuthFn();

    const collectionAuthService = useAuth.serviceCollection;

    return {

        getUser() {

            let user = undefined;

            collectionAuthService.entities$.subscribe((res) => {
                user = res[0];
            });

            return user;
        },
        
        isUser() {

            let isUser;

            collectionAuthService.entities$.subscribe((res) => isUser = res[0]?._id);

            return !!isUser;
        }
    }
}