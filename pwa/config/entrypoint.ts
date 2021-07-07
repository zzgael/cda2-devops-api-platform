console.log(process.env.NEXT_PUBLIC_ENTRYPOINT, window.origin)

export const ENTRYPOINT = window.origin || process.env.NEXT_PUBLIC_ENTRYPOINT;
