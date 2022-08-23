
type DisposeHandler = (data: unknown) => void;
type ErrorHandler = (err: unknown, res: { moduleId: string, dependencyId: string }) => void


type ModuleId = string;
type Module = Object;
type ModuleMap = Record<ModuleId, Module>;

declare class ModuleSystem {

    set defaultHotupdatable (v: boolean);
    get defaultHotupdatable (): boolean;

    public getModules (): ModuleMap;
    public reload (modules: string[]): Promise<boolean>;
}

declare global {
    interface ImportMeta {
        ccHot?: {
            data: unknown;

            get preventDefaultUpdate (): boolean;
            set preventDefaultUpdate (v: boolean);

            accept(errorHandler?: ErrorHandler): void;
            accept(
                modules: string | string[],
                callback: () => void,
                errorHandler?: ErrorHandler,
            ): void;

            
            decline(): void;
            decline(dependencies: string[]): void;

            dispose(handler: DisposeHandler);

            upvalue<TFunction extends Function> (target: TFunction): TFunction | void;
        };

        moduleSystem?: ModuleSystem;
    }
}

export {};