import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchFormComponent } from './search-form.component';
import { PostService } from '../post.service';
import { Post } from '../post';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('SearchFormComponent', () => {
  //Uses the real component to be tested
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  //Using a fake HTTP Client and Router
  const fakeRouter = {
    request: 'Some Other Page'
  };
  const fakeHttpClient = {
    get: 'someUrl'
  }

  beforeEach(async(() => {
  
      TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {provide: RouterTestingModule, useValue: fakeRouter },
        {provide: HttpClientModule, useValue: fakeHttpClient }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for something', () => {
    //I need to access the SF Components' private search object
    let myParams = {query: 'Yay!'} as Params;
    component.onSearch();
   spyOn
  });

});
