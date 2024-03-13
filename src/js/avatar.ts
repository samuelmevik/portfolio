import { UserJSON } from "./user";

function useAvatar(element: HTMLImageElement, user: UserJSON) {
  element.src = user.avatar_url;
}

export default useAvatar;
