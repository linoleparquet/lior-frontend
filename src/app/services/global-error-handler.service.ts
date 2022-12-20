import { Injectable, ErrorHandler, Inject, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class GlobalErrorHandlerService extends ErrorHandler {
  // Implementation inspired by https://stackoverflow.com/a/68093993
  constructor(@Inject(Injector) private injector: Injector) {
    super();
  }

  // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  public handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      this.toastrService.error(
        error.error instanceof ProgressEvent
          ? "Backend unavailable. Is it up ?"
          : error.error.message,
        "An unexpected error has occurred:",
        {
          closeButton: true,
          timeOut: 4000,
          onActivateTick: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-bottom-center",
        }
      );
    }

    console.error(error);
  }
}
