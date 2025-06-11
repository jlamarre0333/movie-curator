# Movie Curator - MVP Plan

## Overview
This is our accelerated plan to reach MVP (Minimum Viable Product) quickly. This plan focuses on core functionality while maintaining the ability to scale to the full feature set outlined in `PLAN.md`.

## MVP Features

### 1. Simplified Backend
- [x] Set up json-server for quick backend prototyping
- [ ] Create initial data structure for:
  - Movies/TV Shows
  - User preferences
  - Watchlist
  - Watch history
- [ ] Set up basic REST endpoints

### 2. Core API Integration
- [ ] TMDB API Integration
  - [ ] Set up API key and configuration
  - [ ] Create service for fetching movies/shows
  - [ ] Implement search functionality
  - [ ] Get movie/show details
- [ ] JustWatch API Integration (single source for streaming availability)

### 3. Essential Frontend Features
- [x] Basic UI components
- [x] Movie/Show cards
- [x] Content sections (New, Trending, Recommended)
- [ ] Connect to backend API
- [ ] Implement real search functionality
- [ ] Add watchlist operations
- [ ] Basic preference management (genres only)

## Implementation Steps

### Phase 1: Backend Setup (Current Focus)
1. Install and configure json-server
2. Create initial db.json with sample data
3. Test API endpoints
4. Document available routes

### Phase 2: API Integration
1. Set up TMDB API service
2. Create data transformation layer
3. Implement JustWatch API integration
4. Create unified content service

### Phase 3: Frontend-Backend Connection
1. Update frontend to use real API data
2. Implement search functionality
3. Add watchlist operations
4. Create preference management UI

### Phase 4: Essential Features
1. Basic recommendation system based on genres
2. Watch history tracking
3. Simple content filtering
4. Error handling and loading states

## Success Criteria for MVP
- Users can browse movies and TV shows
- Users can search for content
- Users can maintain a watchlist
- Users can set basic preferences
- Users can see where content is available to stream
- Basic recommendations based on genres

## Technical Decisions for MVP
- Use json-server instead of Express + PostgreSQL
- Focus on TMDB API as primary data source
- Use JustWatch API for streaming availability
- Keep frontend state management simple (Redux only where necessary)
- Minimize external dependencies

## Post-MVP Priorities
1. Migrate to Express + PostgreSQL if needed
2. Add additional streaming platform integrations
3. Enhance recommendation algorithm
4. Add user authentication
5. Implement additional APIs (IMDb, Rotten Tomatoes) 