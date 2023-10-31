interface SuccessResponse<T> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  error: {
    message: string;
    stack: string|undefined;
  }
}

export type {
  SuccessResponse,
  ErrorResponse,
};