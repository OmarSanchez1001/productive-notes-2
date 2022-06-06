import { Component, OnInit, ViewChild } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent, MbscEventcalendarView} from '@mobiscroll/angular';
import {
    MbscPopupOptions,
    MbscPopup,
    formatDate,
    setOptions
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { DAY_OF_MONTH } from '@mobiscroll/angular/dist/js/core/util/datetime';

setOptions({
    locale: onscroll,
    theme: 'material',
    themeVariant: 'dark'
});

@Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    providers: [Notifications]
})

export class CalendarioComponent implements OnInit {
    selectedDate: Date;
    appointments = [];
    // Place the code below into your own component or use the full template


    constructor(private http: HttpClient, private notify: Notifications) {}

    myEvents: MbscCalendarEvent[] = [];

    @ViewChild('popup', { static: false })
    tooltip!: MbscPopup;

    currentEvent: any;
    status = '';
    buttonText = '';
    buttonType = '';
    bgColor = '';
    info = '';
    time = '';
    anchor: HTMLElement | undefined;
    timer: any;


    eventSettings: MbscEventcalendarOptions = {
        locale: onscroll,
        theme: 'material',
        themeVariant: 'dark',
        clickToCreate: false,
        dragToCreate: false,
        dragToMove: false,
        dragToResize: false,
        showEventTooltip: false,
        view: {
            agenda: { type: 'week'}
        },
        onEventClick: (event, inst) => {
            this.notify.toast({
                message: event.event.title
            }),
            this.tooltip.open();;
        },
        onEventHoverIn: (args, inst) => {
            const event: any = args.event;
            const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

            this.currentEvent = event;

            if (event.confirmed) {
                this.status = 'Confirmado';
                this.buttonText = 'Cancelar Evento';
                this.buttonType = 'warning';
            } else {
                this.status = 'Cancelado';
                this.buttonText = 'Confirmar Evento';
                this.buttonType = 'success';
            }

            this.bgColor = event.color;
            this.info = event.title;
            this.time = time;

            clearTimeout(this.timer);
            this.timer = null;

            this.anchor = args.domEvent.target;
            this.tooltip.open();
        },
        onEventHoverOut: () => {
            if (!this.timer) {
                this.timer = setTimeout(() => {
                    this.tooltip.close();
                }, 200);
            }
        },
        responsive: {
            xsmall: {
                view: {
                    calendar: {
                        type: 'month'
                    },
                    agenda: {      
                        type: 'day'
                    }
                }
            },
            custom: { // Custom breakpoint
                breakpoint: 600,
                view: {
                    calendar: {
                        labels: true
                    }
                }
            },
        }
    };

    popupOptions: MbscPopupOptions = {
        display: 'anchored',
        touchUi: false,
        showOverlay: false,
        contentPadding: false,
        closeOnOverlayClick: false,
        width: 350
    };
    
    ngOnInit(): void {
        this.http.jsonp < MbscCalendarEvent[] > ('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
    }
    
    

    
    mouseEnter(): void {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    mouseLeave(): void {
        this.timer = setTimeout(() => {
            this.tooltip.close();
        }, 200);
    }

    setStatus(): void {
        const status = this.myEvents.findIndex((item: any) => item.id === this.currentEvent.id);
        this.myEvents[status].confirmed = !this.myEvents[status].confirmed;
        this.tooltip.close();
        this.notify.toast({
            message: 'Evento ' + (this.currentEvent.confirmed ? 'confirmado' : 'cancelado')
        });
    }

    deleteApp(): void {
        this.myEvents = this.myEvents.filter((item: any) => item.id !== this.currentEvent.id);
        this.tooltip.close();
        this.notify.toast({
            message: 'Evento Eliminado'
        })
    }

    addEvent(): void {
        const newEvent = {
            // base properties
            title: 'Nuevo Evento',
            color: '#56ca70',
            start: new Date(2022, 6, 21, 19),
            end: new Date(2022, 6, 21, 21),
            // add any property you'd like
            busy: true
        };
        this.selectedDate = new Date(2022, 6, 21);
        this.myEvents = [...this.myEvents, newEvent];

        this.notify.toast({
            message: 'Evento añadido'
        });
    }
    
}
