import React from 'react';
import ReactDOM from 'react-dom/client';

// Import react idioms solutions
import { FunctionsAsComponents } from './idioms/1-function-as-components';
import {
  arrayCopying,
  objectCopyingWithSpread,
  objectCopyingWithStructuredClone,
} from './idioms/2-object-array-copying';
import { UseFetchEffect } from './idioms/3-use-effect';
import { UseEffectDerivedCalculation } from './idioms/4-use-fetch-derived-calculation';
import { UseEffectLifeCycle } from './idioms/5-use-effect-lifecycle';
import { DirtyUnmount } from './idioms/6-dirty-unmount';
import { AvoidingUseState } from './idioms/7-avoiding-use-state';
import { CrudeDeclarations } from './idioms/8-crude-declarations';
import { MagicNumbers } from './idioms/9-magic-numbers';
import { UndiomaticHtmlStructure } from './idioms/10-undiomatic-html-structure';
import { FormWithStructuredState } from './idioms/11-crude-state-management';
import { UnidiomaticHTMLHierarchy } from './idioms/12-unidiomatic-html-structure';
import { EnhancedErrorHandling } from './idioms/13-substandard-data-structure';
import { DangerousIdentifier } from './idioms/14-dangerous-identifier';
import { UnnecessaryEffectTriggering } from './idioms/15-unnecesary-effect-triggering';
import { IncorrectDependencies } from './idioms/16-incorrect-dependencies';
import { UnnecessaryFunctionRedefinitions } from './idioms/17-unnecessary-function-definitions';
import { SerialLoading } from './idioms/18-serial-loading';
import { UnoptimizableRenderingStructure } from './idioms/19-unoptomizable-rendering-structure';

// Uncomment the following function lines to see the solutions in action
// arrayCopying();
// objectCopyingWithSpread();
// objectCopyingWithStructuredClone();

// Ask for AvoidingUseState, and IncorrectDependencies

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Uncomment the following JSX components to see the solutions in action
  <React.StrictMode>
    {/* <FunctionsAsComponents buttonText='Click me' /> */}
    {/* <UseFetchEffect fetchURL='https://rickandmortyapi.com/api/character/765' label="Native Alien" /> */}
    {/* <UseEffectLifeCycle /> */}
    {/* <UseEffectDerivedCalculation /> */}
    {/* <DirtyUnmount /> */}
    {/* <AvoidingUseState /> */}
    {/* <CrudeDeclarations /> */}
    {/* <MagicNumbers age={18} /> */}
    {/* <UndiomaticHtmlStructure /> */}
    {/* <FormWithStructuredState /> */}
    {/* <UnidiomaticHTMLHierarchy /> */}
    {/* <EnhancedErrorHandling /> */}
    {/* <DangerousIdentifier /> */}
    {/* <UnnecessaryEffectTriggering /> */}
    {/* <IncorrectDependencies records={[{ id: '1', name: 'Messi' }, { id: '2', name: 'Ronaldo' }]} /> */}
    {/* <UnnecessaryFunctionRedefinitions emails={['as.com', 'messi@gmail.com']} /> */}
    {/* <SerialLoading /> */}
    <UnoptimizableRenderingStructure altRecords={[{ id: 1, type: 'alt-record' }]} />
  </React.StrictMode>
);
