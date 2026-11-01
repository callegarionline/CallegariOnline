import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in Callegari Engenharia app:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 text-center font-sans">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#2f5d8f] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              !
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-900">
              Callegari Engenharia
            </h1>
            <p className="text-slate-600 text-sm">
              Ocorreu uma instabilidade momentânea no carregamento da aplicação.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="w-full py-3 px-6 bg-[#2f5d8f] hover:bg-[#244973] text-white font-semibold rounded-lg shadow transition duration-200 cursor-pointer"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
