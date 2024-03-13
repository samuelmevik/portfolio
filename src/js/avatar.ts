import { UserJSON } from "./github";

function useAvatar(element: HTMLImageElement, user: UserJSON) {
  element.src = user.avatar_url;
}

export default useAvatar;
