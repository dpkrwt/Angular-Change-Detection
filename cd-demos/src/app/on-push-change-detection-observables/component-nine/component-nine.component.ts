// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-nine',
    template: `
        <a class="on-push">Cmp9</a>

        <ul>
            <li>
                <cmp-seventeen [model]="model"></cmp-seventeen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNine implements AfterViewChecked {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
