import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export function useTexture<URL extends string | string[]>(
  url: URL
): URL extends any[] ? Texture[] : Texture {
  return useLoader(TextureLoader, url);
}
